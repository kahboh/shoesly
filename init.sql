CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  style VARCHAR(255)
);

INSERT INTO projects (title, style)
VALUES
('Modern Living Room', 'Modern'),
('Minimalist Office', 'Minimalist');