DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS tweet;

CREATE TABLE user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    pswrd TEXT NOT NULL DEFAULT 123456,
    flname TEXT NOT NULL,
    propic TEXT DEFAULT "\static\images\profile.png",
    UNIQUE(username, pswrd)
);

CREATE TABLE tweet(
    id INTEGER PRIMARY KEY AUTOINCREMENT,/*auto increment? something more unique?*/
    author_id INTEGER NOT NULL,
    created TIMESTAMP/*this way?*/ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    body TEXT NOT NULL,
    is_root INTEGER NOT NULL DEFAULT 1,
    root_tweet_id INTEGER,
    FOREIGN KEY (author_id) REFERENCES user (id)
);