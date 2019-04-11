from django.shortcuts import render,HttpResponse
from app01 import models

def test(request,*args,**kwargs):
    # models.A.objects.create(title='t1')
    # models.A.objects.create(title='t2')

    # models.B.objects.create(name='n1')
    # models.B.objects.create(name='n2')

    # alist = models.A.objects.all().first()
    #
    # blist = models.B.objects.all().first()
    #
    # models.C.objects.create(txt='t1',content_object=alist)
    # models.C.objects.create(txt='t2',content_object=blist)

    # vlist = models.C.objects.all()
    # for v in vlist:
    #     print(v.txt,v.content_object)

    return HttpResponse('...')