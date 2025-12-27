# Use the official Python image as a base
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port Gunicorn will run on
EXPOSE 80

# Run the Flask application with Gunicorn
# --workers: number of worker processes, adjust based on your CPU
# --bind: host and port
CMD ["gunicorn", "--workers", "4", "--bind", "0.0.0.0:192", "app:app"]

