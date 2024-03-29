import os
from flask import Flask

app = Flask(__name__, instance_relative_config=True)

#def config_app(app, test_config=None):
    #create&config
app.config.from_mapping(
    SECRET_KEY='dev',
    DATABASE=os.path.join(app.instance_path, 'db.sqlite'),
)

#if test_config is None:
    # load the instance config, if it exists, when not testing
#    app.config.from_pyfile('config.py', silent=True)
#else:
    # load the test config if passed in
#    app.config.from_mapping(test_config)

# ensure the instance folder exists
try:
    os.makedirs(app.instance_path)
except OSError:
    pass

#@app.route('/hello')
#def hello():
#    return 'Hello, World!'

import db
db.init_app(app)
app.logger.info("initiated db")
import posts
app.register_blueprint(posts.bp)
app.logger.info("registered posts blueprint")
app.add_url_rule('/', endpoint='index')
#app.add_url_rule('/', endpoint='postTweet')

#    return app

#@app.route('/')
#def index():
#    return "<h1>Welcome to our server !!</h1>"

if __name__ == "__main__":
    app.run()
    print ("app started")