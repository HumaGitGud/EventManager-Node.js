CREATE DATABASE eventmanager;
USE eventmanager;

DROP TABLE IF EXISTS events;
CREATE TABLE events(
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
	event_date DATETIME NOT NULL
);

INSERT INTO events (title, description, is_completed, event_date) VALUES ("New Year's", 'It is a new year!', 0, '2024-12-31 11:59:59');
SELECT * FROM events;