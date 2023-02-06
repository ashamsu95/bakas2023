from rest_framework.response import Response
from rest_framework.decorators import api_view
from .task import send_mail_func

@api_view(['POST'])
def createNote(request):
    data = request.data
    send_mail_func.delay(data)
    print(data)
    return Response(data)