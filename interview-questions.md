# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The foreign key would be on the student model as it would be calling the primary id from the cohort model as the relational link. If cohort has_many students, that would mean Student belongs_to Cohort, making Cohort the parent and Student the child of Cohort. We can fix this mistake by using migrations to modify our schema. I have personally already had to do this, changing the datatype of a certain column or adding a new one.

Researched answer: After creating a new migration with the rails generate migration command, we can define, within the migration created, a change method to update what we wish. If we neglected to add a column, we can simply use an add_column statement and add our student_id to act as the foreign key, as well as the associated data type for the column.

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, Edit, Destroy, and Update. These routes require an id to be passed into them to specify a certain object. In my time of creating rails application, I have only had to pass the id into these routes, never any of the other routes(index, new, or create).

Researched answer: Index doesn't require any params to be passed because its purpose would be to return every single instance in a database. New is simply showing a form to create a new instance. Create is adding information to the database. Without passing the primary key as a param for show, edit, destroy, and update, you would not be able to perform actions on specific instances.

3. Name three rails generator commands. What is created by each?

Your answer: rails generate model creates a new model, where you can specify the columns, and datatypes associated with each column. rails generate migration is a generator command that allows us to update/change the database's schema. rails generate resource is a generator that allows us to create a new model, specify columns and column datatypes, and creates a resource in the routes and view file.

Researched answer: The rails generate command gives us boilerplate code to work with, rather than coding everything from scratch. There are several items we can generate, such as controllers, assets, etc. If we enter rails generate scaffold, rails will give us a complete set of model, database migration, controller, views, resource routes, and a test suite to utilize.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
    Index. This shows all student instances.

action: "POST" location: /students
    Create. This adds a new student to our database, with the usage of the new form.

action: "GET" location: /students/new
    New. This will show a form to a user to add a new student to the database.

action: "GET" location: /students/2
    Show. This will allow us to view the student in the database whose id is 2.

action: "GET" location: /students/2/edit
    Edit. This will show a form to a user to edit values of a specific student.

action: "PATCH" location: /students/2
    Update. This allows a specific student's values to be modified, with the usage of the edit form.

action: "DELETE" location: /students/2
    Destroy. Deletes the student with id of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User Story 1: As a user, I can password protect my task list

User Story 2: As a user, I can see the description and completion status of my tasks

User Story 3: As a user, I can update my completion status on a specific task

User Story 4: As a user, I can only have unique task descriptions

User Story 5: As a user, I can navigate to a specific task page and see the description, completion status, and date that task was created

User Story 6: As a user, I can see all tasks on my to do list

User Story 7: As a user, I can create a new task

User Story 8: As a user, I can edit a task from my list

User Story 9: As a user, I can delete a task from my list

User Story 10: As a user, when I submit a new task, I am redirected back to the home page