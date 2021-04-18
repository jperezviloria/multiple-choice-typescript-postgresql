CREATE TABLE plan(
	id serial,
	description VARCHAR(200),
	price INT,
	PRIMARY KEY(id)
);

CREATE TABLE student(
	id serial,
	username VARCHAR(200),
	firstname VARCHAR(200),
	surname VARCHAR(200),
	age INT,
	currentLevel INT,
	idPlan INT, 
	statusPayment boolean,
	imageurl VARCHAR(200),
	publicid VARCHAR(200),
	PRIMARY KEY(id),
	FOREIGN KEY (idPlan) REFERENCES plan(id)
);

CREATE TABLE teacher(
	id serial,
	username VARCHAR(200),
	firstname VARCHAR(200),
	surname VARCHAR(200),
	age INT,
	quantityStudents INT,
	imageurl VARCHAR(200),
	publicid VARCHAR(200),
	PRIMARY KEY(id)
);

