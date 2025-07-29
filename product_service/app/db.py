import os
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy

load_dotenv()
db = SQLAlchemy()

server = os.getenv('DATABASE_SERVER_NAME')
database = os.getenv('DATABASE_NAME')
username = os.getenv('DATABASE_USERNAME')
password = os.getenv('DATABASE_PASSWORD')
driver = 'ODBC+Driver+18+for+SQL+Server'

connection_string = f'mssql+pyodbc://{username}:{password}@{server}:1433/{database}?driver={driver}'


def init_db(app):
    """Initialize the database connection and create tables if they do not exist."""
    app.config['SQLALCHEMY_DATABASE_URI'] = connection_string
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    try:
        db.init_app(app)
        with app.app_context():
            db.create_all()
            print("Database initialized and tables created successfully. ✅")
    except Exception as e:
        print(f"Error initializing database: {e} ❌")
