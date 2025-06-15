from flask import Flask, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 👈 Enable CORS for all routes

# MySQL config
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'V3nkatesh'
app.config['MYSQL_DB'] = 'colleges'

mysql = MySQL(app)

@app.route('/api/colleges', methods=['GET'])
def get_colleges():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM indian_engineering_colleges WHERE state LIKE 'Karnataka'")
    rows = cursor.fetchall()
    column_names = [i[0] for i in cursor.description]
    data = [dict(zip(column_names, row)) for row in rows]
    cursor.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
