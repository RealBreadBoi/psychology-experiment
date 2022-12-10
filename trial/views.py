from django.shortcuts import render
from django.http import HttpResponse

import json
import gspread

from . import util



def index(request):
    context = {}
    return render(request, 'trial/index.html', context)

def consent(request):
    context = {}
    return render(request, 'trial/consent.html', context)

def uploadData(request):
    exp_res = json.loads(request.body)

    with open('./media/raw_data.txt', 'a+') as f:
        f.writelines([exp_res])

    data = util.extract_data(exp_res)


    gc = gspread.service_account()
    SHEET_KEY = '1OQCS9bucUOxwHAV7c4-N03po9NFmnZKI7A-73zkc_q0'
    sheet = gc.open_by_key(SHEET_KEY)
    wks = sheet.sheet1
    row_no = len(wks.col_values(1)) + 1

    row_data = []
    row_data.append(data['initials'])
    row_data.append(data['dob'])
    row_data.append(data['eq'])
    row_data.append(data['anx_fear'])
    row_data.append(data['anx_avoid'])

    emotions = ['happy', 'sad', 'angry', 'disgusted', 'fearful', 'surprised']

    for em in emotions:
        for i in range(1, 6):
            row_data.append(data[f'img_{em}{i}'])

    for em in emotions:
        for i in range(1, 4):
            row_data.append(data[f'vid_{em}{i}'])

    wks.update(f'A{row_no}:BA{row_no}', [row_data])

    return HttpResponse('{}')