ID_INDEX = 2
EQ_INDEX = 3
ANX_INDEX = 4

def extract_data(exp_res):
    res = {}

    for i in range(len(exp_res)):
        if i == ID_INDEX:
            extract_id(res, exp_res[i])
        elif i == EQ_INDEX:
            extract_eq(res, exp_res[i])
        elif i == ANX_INDEX:
            extract_anx(res, exp_res[i])
        elif exp_res[i]['trial_type'] == 'image-button-response':
            extract_img(res, exp_res[i])
        elif exp_res[i]['trial_type'] == 'video-button-response':
            extract_vid(res, exp_res[i])
        else:
            continue

    return res

def extract_id(res, id_trial):
    res['initials'] = id_trial['response']['initials']
    res['dob'] = id_trial['response']['dob']

def extract_eq(res, eq_trial):
    s = 0
    for ans in eq_trial['response']['emotional_intelligence'].items():
        s += ans[1] + 1
    
    res['eq'] = s

def extract_anx(res, ans_trial):
    s = 0
    for ans in ans_trial['response']['anxiety_teama'].items():
        s += ans[1] + 1
    
    res['anx_fear'] = s

    s2 = 0
    for ans in ans_trial['response']['anxiety_evit'].items():
        s2 += ans[1] + 1

    res['anx_avoid'] = s2

def extract_img(res, img_trial):
    stim = img_trial['stim']
    response = img_trial['response']
    res['img_' + stim] = img_trial['choices'][response]

def extract_vid(res, vid_trial):
    stim = vid_trial['stim']
    response = vid_trial['response']
    res['vid_' + stim] = vid_trial['choices'][response]
