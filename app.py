import os
from flask import Flask

app = Flask(__name__, instance_relative_config=True)

def config_app(flapp, test_config=None):
    #create&config
    flapp.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(flapp.instance_path, 'db.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        flapp.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        flapp.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(flapp.instance_path)
    except OSError:
        pass

    #@flapp.route('/hello')
    #def hello():
    #    return 'Hello, World!'

    import db
    db.init_app(flapp)

    import posts
    flapp.register_blueprint(posts.bp)
    flapp.add_url_rule('/', endpoint='index')
    #flapp.add_url_rule('/', endpoint='postTweet')

    return flapp

if __name__ == "__main__":
    app = config_app()
    app.run()