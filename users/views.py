from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
import jwt, datetime
 
@api_view(['POST'])
def Register(request):
    serializer = UserSerializer(data = request.data)
    serializer.is_valid(raise_exception = True)
    serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def Login(request):
    email = request.data['email']
    password = request.data['password']
    user = User.objects.filter(email=email).first()
    if user is None:
        raise AuthenticationFailed('User Not Found')
    
    if not user.check_password(password):
        raise AuthenticationFailed("Incorrect Password")
    
    payload = {
        "id": user.id,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
        "iat" : datetime.datetime.utcnow()
    }

    token = jwt.encode(payload, "neil", algorithm= "HS256")
    response = Response()
    response.set_cookie(key='jwt', value= token, httponly=True)
    response.data = {
        "token": token
    }
    return response

@api_view(['GET'])
def GetUser(request):
    token = request.COOKIES.get("jwt")
    if not token:
        raise AuthenticationFailed("Unauthenticated")

    try:
        payload = jwt.decode(token, "neil", algorithms=["HS256"])
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed("Unauthenticated")
    
    user = User.objects.filter(id=payload['id']).first()
    serializer = UserSerializer(user)
    return Response(serializer.data)

@api_view(['POST'])
def Logout(request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response

@api_view(['POST'])
def Test(request):
    return Response({"answer": "Prompt Reply"})
  