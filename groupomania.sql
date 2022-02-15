CREATE DATABASE IF NOT EXISTS groupomania CHARACTER SET 'utf8';

CREATE TABLE IF NOT EXISTS User (
    user_id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nom VARCHAR(64) NOT NULL,
    prenom VARCHAR(64) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    -- pseudo VARCHAR(64) NOT NULL,
    -- poste VARCHAR(255) NOT NULL,
    -- status CHAR(1) NOT NULL DEFAULT 'E',
    -- tel CHAR(10) NOT NULL 
    ) ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS Post (
    post_id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    title VARCHAR(255) NOT NULL,
    fk_id_user INT(10) UNSIGNED,
    FOREIGN KEY (fk_id_user) REFERENCES User(user_id)
    on DELETE CASCADE ON UPDATE CASCADE,
    media_url VARCHAR(255),
    content TEXT,
    category VARCHAR(64) NOT NULL
   ) ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS Comment (
    comment_id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    content TINYTEXT NOT NULL,
    fk_id_user INT(10) UNSIGNED,
    fk_id_post INT(10) UNSIGNED,
    fk_id_message INT(10) UNSIGNED,
    FOREIGN KEY (fk_id_user) REFERENCES User(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (fk_id_post) REFERENCES Post(post_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (fk_id_message) REFERENCES messageperso(message_perso_id)
    ON DELETE CASCADE ON UPDATE CASCADE
)   ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS MessagePerso (
    message_perso_id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    prenom VARCHAR(64) NOT NULL,
    commentaire VARCHAR(255) NOT NULL,
    FOREIGN KEY (fk_id_user) REFERENCES User(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
)   ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS Likes (
    like_id INT(10) UNSIGNED NOT NULL,
    dislike_id INT(10) UNSIGNED NOT NULL,
    fk_id_user INT(10) UNSIGNED,
    fk_id_post INT(10) UNSIGNED,
    fk_id_message INT(10) UNSIGNED,
    FOREIGN KEY (fk_id_user) REFERENCES User(user_id)
) ENGINE= INNODB


-- Sa récupère tous les commentaires associer aux messages dont id ==91 avec les infos de l'user qui la créer(commentaires)
SELECT comment.content, comment.comment_id, user.user_id, user.nom, user.prenom FROM Comment JOIN User ON comment.fk_id_user = user.user_id WHERE fk_id_message =91

SELECT comment_id, comment.content,comment.fk_id_message,messageperso.message_perso_id,messageperso.commentaire, messageperso.fk_id_user FROM comment JOIN messageperso ON comment.fk_id_message =messageperso.message_perso_id