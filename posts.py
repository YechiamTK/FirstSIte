from flask import (
    Blueprint, g, redirect, render_template, request, url_for
)

from .db import get_db
import json
import sys

bp = Blueprint('posts', __name__)

@bp.route('/', methods=('GET', 'POST'))
def index():        
    db = get_db()
    posts = db.execute(
        'SELECT t.id, body, created, author_id, username, flname'
        ' FROM tweet t JOIN user u ON t.author_id=u.id'
        ' ORDER BY created DESC'
    ).fetchall()
    tweets = ""
    for post in posts:
        tweets+=(str(list(post)))
    print('CHECK', file=sys.stdout)
    return render_template('/index.html', posts=tweets)

#json.dumps(tweets, default=str)

@bp.route('/postTweet', methods=('GET', 'POST'))
def postTweet():
    print('Entered postTweet', file=sys.stdout)
    if request.method == 'POST':
        print('Caught POST', file=sys.stdout)
        body = request.form['newtweet']
        """ author_id = request.form('id') """
        err = None

        if not body:
            error = "No tweet text"
        
        db = get_db()
        db.execute(
            'INSERT INTO tweet(author_id, body)'
            ' VALUES (?, ?)',
            (1, body)
        )
        db.commit()
    return ('', 204)


@bp.route('/fetchTweets')
def fetchTweets():
    print('Entered fetchTweets', file=sys.stdout)
    db = get_db()
    cur = db.execute(
    'SELECT t.id, body, created, author_id, username, flname'
    ' FROM tweet t JOIN user u ON t.author_id=u.id'
    ' ORDER BY created DESC'
    )
    headers = list(map(lambda x: x[0], cur.description))
    print(headers, file=sys.stdout)
    posts = [{header:row[i] for i, header in enumerate(headers)} for row in cur]
    print(posts, file=sys.stdout)
    tweets = json.dumps(posts, default=str)
    print('FETCH', file=sys.stdout)
    return (tweets)