from flask import (
    Blueprint, g, redirect, render_template, request, url_for
)

from .db import get_db


bp = Blueprint('posts', __name__)

@bp.route('/')
def index():
    db = get_db()
    posts = db.execute(
        'SELECT t.id, body, created, author_id, username, flname'
        ' FROM tweet t JOIN user u ON t.author_id=u.id'
        ' ORDER BY created DESC'
    ).fetchall()
    return render_template('/index.html', tweets=posts)