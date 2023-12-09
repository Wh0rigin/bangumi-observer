
from flask import Flask,render_template,request
from http import HTTPStatus
import dashscope
from flask_cors import CORS
import json
import yaml

def get_token_from_yaml():
    with open('token.yaml', 'r') as file:
        data = yaml.safe_load(file)
        # 假设 token.yaml 的内容类似于:
        # token: your_actual_token_value
        token_value = data.get('token')

    return token_value

token = get_token_from_yaml()



app = Flask(__name__)
dashscope.api_key=token
# CORS(app,origins=['http://localhost:8080'])
CORS(app)

@app.route('/call',methods=['POST'])
def call_with_prompt():
    print(request.form)
    # For prerequisites running the following sample, visit https://help.aliyun.com/document_detail/611472.html
    response = dashscope.Generation.call(
        model=dashscope.Generation.Models.qwen_turbo,
        prompt=json.loads(request.data.decode('utf-8'))['question']
    )
    # The response status_code is HTTPStatus.OK indicate success,
    # otherwise indicate request is failed, you can get error code
    # and message from code and message.
    if response.status_code == HTTPStatus.OK:
        print(response.output)  # The output text
        print(response.usage)  # The usage information
    else:
        print(response.code)  # The error code.
        print(response.message)  # The error message.

    return {'code':200,'data':response.output}






if __name__ == '__main__':
    # app.run(host, port, debug, options)
    # 默认值：host="127.0.0.1", port=5000, debug=False
    app.run(port=5000,debug=True)
