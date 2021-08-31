from flask import (
    Blueprint, g, redirect, render_template, request, url_for, jsonify
)

from db import get_db
import json
import sys
import click
import json

bp = Blueprint('posts', __name__)

"""
Autentication REST request.
Checks the user params against the db.
Returns json:
    id of the user (if authenticated, else -1)
    Error (if not authenticated, else None)
"""
@bp.route('/auth', methods=['GET', 'POST'])
def authenticate():
    if request.method == 'POST':
        credentials = json.loads(request.data)
        credentials = list(credentials.values())
        res = {"id": -1,"error": None}

        if not credentials:
            err = "No authentication credentials were sent"
            click.echo(err)
            res['error']=err
            return(res)

        db = get_db()
        cur = db.execute('SELECT username, pswrd FROM user ORDER BY username DESC')
        err = "User not found!"

        for userRow in cur:
            click.echo(userRow.keys())
            click.echo(userRow['username'])
            click.echo(userRow['pswrd'])
            if credentials == [userRow['username'], userRow['pswrd']]:
                id = db.execute('SELECT id FROM user WHERE username = (?) AND pswrd = (?)', (credentials[0], credentials[1]))
                click.echo('Found the user! Sending him in now...')
                for cred in id:
                    click.echo(cred['id'])
                    err = None
                    res['id']=cred['id']
                    return(res)

        click.echo(err)
        res['error']=err
        click.echo(json.dumps(res))
        return(res)


@bp.route('/')
def index():
    click.echo("starting render")
    return render_template('index.html', posts="", login="")


@bp.route('/postTweet/<id>', methods=('GET', 'POST'))
def postTweet(id):
    print('Entered postTweet', file=sys.stdout)
    print('id received is:' + id, file=sys.stdout)
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
            (id, body)
        )
        db.commit()
    return ('', 204)


@bp.route('/fetchTweets')
def fetchTweets():
    print('Entered fetchTweets', file=sys.stdout) #debug
    click.echo('Entered fetchTweets')
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
    if (tweets):
        click.echo('supposedly have tweets')
    else:
        click.echo('no tweets available!')
    return (tweets)

@bp.route('/fetchComments/<rootTweetId>')
def fetchComments(rootTweetId):
    print('Entered fetchComments', file=sys.stdout) #debug
    #print('root tweet id is:' + rootTweetId + ' and its type is: ' + str(type(rootTweetId)), file=sys.stdout) #debug
    db = get_db()
    cur = db.execute(
        'SELECT t.id, author_id, root_tweet_id, created, body, username, flname'
        ' FROM tweet t JOIN user u ON t.author_id=u.id'
        ' WHERE is_root=0 AND root_tweet_id=?'
        ' ORDER BY created DESC',
        ((rootTweetId,))
    )
    headers = list(map(lambda x: x[0], cur.description))
    print(headers, file=sys.stdout) #debug
    comments = [{header:row[i] for i, header in enumerate(headers)} for row in cur]
    print(comments, file=sys.stdout)   #debug
    comments = json.dumps(comments, default=str)
    print('FETCH', file=sys.stdout) #debug
    return (comments)

@bp.route('/postComment/<rootTweetId>&<id>', methods=('GET', 'POST'))
def postComment(rootTweetId, id):
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
                (0, rootTweetId, id, body)
            )
            db.commit()

    return (err)