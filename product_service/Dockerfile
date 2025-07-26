FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install essential packages and clean up to reduce image size
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential \
    curl \
    apt-utils \
    gnupg2 &&\
    rm -rf /var/lib/apt/lists/* && \
    pip install --upgrade pip

# Re-update apt packages after cleaning up in the previous step
RUN apt-get update

# Add the Microsoft repository GPG keys to the list of trusted keys
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -

# Add the Microsoft package repository to the system
RUN curl https://packages.microsoft.com/config/debian/11/prod.list > /etc/apt/sources.list.d/mssql-release.list

# Dummy command to ensure previous RUN commands succeed before proceeding
RUN exit

# Update apt-get with new sources from Microsoft
RUN apt-get update

# Install the Microsoft ODBC SQL Driver 18
RUN env ACCEPT_EULA=Y apt-get install -y msodbcsql18

COPY requirements.txt ./

# Copy the ODBC configuration file into the container at the root directory
COPY /odbc.ini /

# Register the SQL Server data source name specified in odbc.ini
RUN odbcinst -i -s -f /odbc.ini -l

# Display the contents of the ODBC configuration file to verify correct setup
RUN cat /etc/odbc.ini

RUN pip install -r requirements.txt

COPY . .

# Expose the ports for REST and gRPC
EXPOSE 5001
EXPOSE 50051

CMD ["python", "server.py"]