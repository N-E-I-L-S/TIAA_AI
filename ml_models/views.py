from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['POST'])
def AM(request):
    question = request.data['question']
    with open("ml_model//pickle_model", "rb") as f:
        model = pickle.load(f)
    answer = model.run(question)
    return Response({"question" : question,"answer": answer})
    