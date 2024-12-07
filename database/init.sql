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

INSERT INTO events (title, description, is_completed, event_date) VALUES ('Carnival', 'Renaissance masquerade', 0, '2024-12-07 20:00:00');
SELECT * FROM events;