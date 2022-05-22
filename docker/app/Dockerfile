FROM python:3.9

WORKDIR /app

COPY app/requirements.txt /app/
RUN pip install -r requirements.txt

COPY app/ /app/
EXPOSE 5000
