from flask import (
    Blueprint, g, redirect, render_template, request, url_for
)

from db import get_db
import json
import sys

bp = Blueprint('posts', __name__)

@bp.route('/', methods=('GET', 'POST'))
def index():        
    """db = get_db()
    posts = db.execute(
        'SELECT t.id, body, created, author_id, username, flname'
        ' FROM tweet t JOIN user u ON t.author_id=u.id'
        ' ORDER BY created DESC'
    ).fetchall()
    tweets = ""
    for post in posts:
        tweets+=(str(list(post)))
    print('CHECK', file=sys.stdout)"""
    return render_template('index.html', posts="")

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
    print('Entered fetchTweets', file=sys.stdout) #debug
    db = get_db()
    cur = db.execute(
    'SELECT t.id, body, created, author_id, username, flname'
    ' FROM tweet t JOIN user u ON t.author_id=u.id'
    ' ORDER BY created DESC'
    )
    headers = list(map(lambda x: x[0], cur.description))
    print(headers, file=sys.stdout) #debug
    posts = [{header:row[i] for i, header in enumerate(headers)} for row in cur]
    print(posts, file=sys.stdout)   #debug
    tweets = json.dumps(posts, default=str)
    print('FETCH', file=sys.stdout) #debug
    return (tweets)

@bp.route('/fetchComments/<rootTweetId>')
def fetchComments(rootTweetId):
    print('Entered fetchComments', file=sys.stdout) #debug
    db = get_db()
    cur = db.execute(
        'SELECT t.id, author_id, root_tweet_id, created, body, username, flname'
        ' FROM tweet t JOIN user u ON t.author_id=u.id'
        ' WHERE is_root=0 AND root_tweet_id=?'
        ' ORDER BY created DESC',
        (rootTweetId)
    )
    headers = list(map(lambda x: x[0], cur.description))
    print(headers, file=sys.stdout) #debug
    comments = [{header:row[i] for i, header in enumerate(headers)} for row in cur]
    print(comments, file=sys.stdout)   #debug
    comments = json.dumps(comments, default=str)
    print('FETCH', file=sys.stdout) #debug
    return (comments)

@bp.route('/postComment/<rootTweetId>', methods=('GET', 'POST'))
def postComment(rootTweetId):
    print('Entered postComment', file=sys.stdout)
    err = ''
    if not rootTweetId:
        err = "No tweet id"
    elif request.method == 'POST':
        print('Caught POST', file=sys.stdout)
        body = request.form['newcomment']
        """ author_id = request.form('id') """

        if not body:
            err = "No tweet text"
        else:
            print(body, file=sys.stdout)
            db = get_db()
            db.execute(
                'INSERT INTO tweet(is_root, root_tweet_id, author_id, body)'
                ' VALUES (?, ?, ?, ?)',
                (0, rootTweetId, 1, body)
            )
            db.commit()

    return (err)