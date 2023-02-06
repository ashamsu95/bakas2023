from __future__ import absolute_import, unicode_literals
import os

from django.conf import settings
from celery import Celery




os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

app = Celery('backend')


app.config_from_object('django.conf:settings', namespace='CELERY')
app.conf.enable_utc = False

app.conf.update(timezone ='Asia/Kathmandu')


# Load task modules from all registered Django apps.
app.autodiscover_tasks()