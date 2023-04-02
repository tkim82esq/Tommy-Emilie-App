import os
import json

from flask import Flask, render_template, request, redirect, url_for
from flask_socketio import SocketIO, emit
import firebase_admin
from firebase_admin import credentials, firestore

# Firebase setup
cred = credentials.Certificate('te-assistant-firebase-adminsdk-p3kxi-8848c75735.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

# Flask app setup
app = Flask(__name__)
app.config['SECRET_KEY'] = 'FBAomD7TDy'
socketio = SocketIO(app)

@app.route('/')
def index1():
    return render_template('index.html')

@app.route('/calendar')
def calendar():
    return render_template('calendar.html')

@app.route('/todo')
def todo():
    return render_template('todo.html')

@app.route('/chat')
def chat():
    return render_template('chat.html')

@socketio.on('message')
def handle_message(data):
    emit('message', data, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=8080)
