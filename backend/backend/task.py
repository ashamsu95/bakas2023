from celery import shared_task
from django.core.mail import send_mail
from . import settings



@shared_task(bind=True)
def send_mail_func(self,data):
    mail_subject = f"Mail from baks website by email - {data['email']}"
    message = f"Name-{data['name']},Phone-{data['phonenumber']}. message-{data['message']}"
    to_email = "ashamsuu@gmail.com"
    send_mail(
        subject = mail_subject,
        message=message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[to_email],
        fail_silently=True,
    )
    return "done"