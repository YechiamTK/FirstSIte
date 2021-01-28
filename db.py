import sqlite3
import click
from flask import current_app, g
from flask.cli import with_appcontext

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row

    return g.db

def init_db():
    db = get_db()
    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))

    db.execute(
        'INSERT INTO user(username, flname)'
        ' VALUES (?, ?)',
        ("YechiamWE", "Yechiam Weiss")
    )
    db.commit()

    db.execute(
        'INSERT INTO user(username, flname)'
        ' VALUES (?, ?)',
        ("YechiamWE2", "Yechiam Weiss2")
    )
    db.commit()

    db.execute(
        'INSERT INTO tweet(author_id, body)'
        ' VALUES (?, ?)',
        (1, "abcdefg")
    )
    db.commit()

    db.execute(
        'INSERT INTO tweet(author_id, body)'
        ' VALUES (?, ?)',
        (2, "hijklm")
    )
    db.commit()
    
    db.execute(
        'INSERT INTO tweet(author_id, root_tweet_id, is_root, body)'
        ' VALUES (?, ?, ?, ?)',
        (1, 1, 0, "comm4nt")
    )
    db.commit()

@click.command('init-db')
@with_appcontext
def init_db_command():
    init_db()
    click.echo('initialized db')
    db = get_db()
    exc = db.execute('SELECT * FROM user, tweet').fetchone()
    click.echo('[%s]' % ', '.join(map(str, exc)))

def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()


def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)