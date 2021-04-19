INSERT INTO adminsts (email, name, surname) VALUES ('admin@email.com', 'Julio', 'Perez');

SELECT * FROM Plan;
INSERT INTO Plan (description, price) VALUES ('Full', 70);

INSERT INTO Student ( email, firstname, surname, age, currentLevel, idPlan, statusPayment, imageUrl, publicID ) VALUES ('maria@email.com', 'maria', 'viloria', 61, 1, 1, true, NULL, NULL);
INSERT INTO Student ( email, firstname, surname, age, currentLevel, idPlan, statusPayment, imageUrl, publicID ) VALUES ('jesus@email.com', 'jesus', 'perez', 67, 2, 1, true, NULL, NULL);
INSERT INTO Student ( email, firstname, surname, age, currentLevel, idPlan, statusPayment, imageUrl, publicID ) VALUES ('andres@email.com', 'andres', 'escobar', 25, 2, 2, true, NULL, NULL);

SELECT * FROM Student

SELECT * FROM Student
JOIN plan ON  plan.id = student.idPlan;

INSERT INTO teacher ( email, firstname, surname, age, quantityStudents, allStudents, imageUrl, publicID ) VALUES ('francisca@email.com', 'francisca', 'viloria', 60, 0, 0, NULL, NULL);
INSERT INTO teacher ( email, firstname, surname, age, quantityStudents, allStudents, imageUrl, publicID ) VALUES ('anderson@email.com', 'anderson', 'foden', 35, 0, 0, NULL, NULL);

SELECT * FROM teacher;

INSERT INTO levels ( numberLevel) VALUES (1);
INSERT INTO levels ( numberLevel) VALUES (2);


INSERT INTO answer ( answer, ) VALUES (1);

ALTER TABLE Answer
ADD COLUMN correct BOOLEAN;