from flask import (
    Blueprint, g, redirect, render_template, request, url_for
)

from .db import get_db
import json

bp = Blueprint('posts', __name__)

@bp.route('/')
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
    return render_template('/index.html', posts=tweets)
#json.dumps(tweets, default=str)
@bp.route('/', methods=('GET', 'POST'))
def postTweet():
    if request.method == 'POST':
        body = request.form('body')
        author_id = request.form('id')
        err = None

        if not body:
            error = "No tweet text"
        
        db = get_db()
        db.execute(
            'INSERT INTO tweet(author_id, body)'
            ' VALUES (?, ?)',
            (author_id, body)
        )
        db.commit()
