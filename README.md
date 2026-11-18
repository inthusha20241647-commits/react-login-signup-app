# React Login & Sign Up App

A simple authentication UI built with **React**, **React Router** and **Tailwind CSS**. Users can sign up, log in, and see a personalised welcome page.

> Learning project: users are stored in React state only and reset on page refresh.

## Live demo link 
https://react-login-signup-app-1hun.vercel.app/

## Features

- Sign up with a username and password
- Login with credential validation and error message
- Personalised landing page
- Client-side routing with React Router

## Tech Stack

React · React Router DOM · Tailwind CSS · JavaScript (ES6+)

## Routes

| Path | Page |
|---|---|
| `/` | Login |
| `/signUp` | Sign Up |
| `/landing` | Welcome page |

## How It Works

1. `App` holds the user list in state and passes it to `Login` and `SignUp` as props.
2. **Sign Up** appends the new user to the list and redirects to Login.
3. **Login** checks the entered credentials against the list. On a match, it navigates to `/landing` and passes the username via route state.

## Getting Started

```bash
git clone https://github.com/<your-username>/react-login-signup-app.git
cd react-login-signup-app
npm install
npm start
```

Demo login: `Inthusha` / `123`
