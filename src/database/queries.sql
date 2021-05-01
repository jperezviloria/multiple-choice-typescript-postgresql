
CREATE TABLE adminSTS(
	id serial,
	email VARCHAR(200) NOT NULL,
	name VARCHAR(200),
	surname VARCHAR(200)
)

CREATE TABLE plan(
	id serial,
	description VARCHAR(200) NOT NULL,
	price INT NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE student(
	id serial,
	email VARCHAR(200) NOT NULL,
	firstname VARCHAR(200),
	surname VARCHAR(200),
	age INT,
	currentLevel INT NOT NULL,
	idPlan INT NOT NULL, 
	statusPayment boolean NOT NULL,
	imageurl VARCHAR(200),
	publicid VARCHAR(200),
	PRIMARY KEY(id),
	FOREIGN KEY (idPlan) REFERENCES plan(id)
);


CREATE TABLE teacher(
	id serial,
	email VARCHAR(200) NOT NULL,
	firstname VARCHAR(200),
	surname VARCHAR(200),
	age INT,
	quantityStudents INT NOT NULL,
	imageurl VARCHAR(200),
	publicid VARCHAR(200),
	PRIMARY KEY(id)
);

ALTER TABLE teacher 
ADD COLUMN allStudents INT;

CREATE TABLE StudentTeacher (
	id serial,
	idStudent int NOT NULL,
	idTeacher int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (idStudent) REFERENCES student (id),
	FOREIGN KEY (idTeacher) REFERENCES teacher (id)
);


CREATE TABLE Test(
	id serial,
	dateInit DATE NOT NULL,
	idStudent INT NOT NULL,
	idTesType INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (idStudent) REFERENCES Student (id)
)


CREATE TABLE Presentation(
	id serial,
	datePresentation DATE NOT NULL,
	points INT NOT NULL,
	approved BOOLEAN NOT NULL,
	stepOpportunity INT NOT NULL,
	idTest INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (idTest) REFERENCES Test (id)
)


CREATE TABLE Test(
	id serial,
	dateInit DATE NOT NULL,
	idStudent INT NOT NULL,
	idTestType INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (idStudent) REFERENCES Student (id),
	FOREIGN KEY (idTestType) REFERENCES TestType (id)
)

-- ZONE TO CREATE TEST

CREATE TABLE Levels2(
	id serial,
	numberLevel INT NOT NULL UNIQUE,
	PRIMARY KEY(id)
);

INSERT INTO levels ( numberLevel) VALUES (1);
INSERT INTO levels ( numberLevel) VALUES (2);

CREATE TABLE TestType(
	id serial,
	contextName VARCHAR(200) NOT NULL,
	PRIMARY KEY(id)
)

CREATE TABLE Question(
	id serial,
	question VARCHAR(200) NOT NULL,
	idLevel INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (idLevel) REFERENCES Levels (id)
)

CREATE TABLE Answer(
	id serial,
	answer VARCHAR(200) NOT NULL,
	idQuestion INT NOT NULL,
    correct BOOLEAN NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (idQuestion) REFERENCES Question (id)
)

CREATE TABLE QuestionType(
	id serial,
	idQuestion INT NOT NULL,
	idTestType INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (idQuestion) REFERENCES Question (id),
	FOREIGN KEY (idTestType) REFERENCES TestType (id)
)



