from django.db import models

class Item(models.Model):
    csIDno = models.CharField(max_length=100, blank=True, null=True)
    sname = models.CharField(max_length=100, blank=True, null=True)
    fname = models.CharField(max_length=100, blank=True, null=True)
    mname = models.CharField(max_length=100, blank=True, null=True)
    extname = models.CharField(max_length=100, blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    pob = models.CharField(max_length=100, blank=True, null=True)
    sex = models.CharField(max_length=100, blank=True, null=True)
    height = models.CharField(max_length=100, blank=True, null=True)
    weight = models.CharField(max_length=100, blank=True, null=True)
    btype = models.CharField(max_length=100, blank=True, null=True)
    gsisid = models.CharField(max_length=100, blank=True, null=True)
    pagibigid = models.CharField(max_length=100, blank=True, null=True)
    philhealthno = models.CharField(max_length=100, blank=True, null=True)
    sssno = models.CharField(max_length=100, blank=True, null=True)
    tinno = models.CharField(max_length=100, blank=True, null=True)
    aemployeeid = models.CharField(max_length=100, blank=True, null=True)
    citizenship = models.CharField(max_length=100, blank=True, null=True)
    raddress = models.CharField(max_length=100, blank=True, null=True)
    razipcode = models.CharField(max_length=100, blank=True, null=True)
    paddress = models.CharField(max_length=100, blank=True, null=True)
    pazipcode = models.CharField(max_length=100, blank=True, null=True)
    telephoneno = models.CharField(max_length=100, blank=True, null=True)
    mobileno = models.CharField(max_length=100, blank=True, null=True)
    emaddress = models.EmailField(max_length=100, blank=True, null=True)
    ssname = models.CharField(max_length=100, blank=True, null=True)
    sfname = models.CharField(max_length=100, blank=True, null=True)
    smname = models.CharField(max_length=100, blank=True, null=True)
    sextname = models.CharField(max_length=100, blank=True, null=True)
    sjob = models.CharField(max_length=100, blank=True, null=True)
    sebname = models.CharField(max_length=100, blank=True, null=True)
    baddess = models.CharField(max_length=100, blank=True, null=True)
    stelephoneno = models.CharField(max_length=100, blank=True, null=True)
    child1name = models.CharField(max_length=100, blank=True, null=True)
    child1dob = models.DateField(blank=True, null=True)
    child2name = models.CharField(max_length=100, blank=True, null=True)
    child2dob = models.DateField(blank=True, null=True)
    child3name = models.CharField(max_length=100, blank=True, null=True)
    child3dob = models.DateField(blank=True, null=True)
    child4name = models.CharField(max_length=100, blank=True, null=True)
    child4dob = models.DateField(blank=True, null=True)
    child5name = models.CharField(max_length=100, blank=True, null=True)
    child5dob = models.DateField(blank=True, null=True)
    child6name = models.CharField(max_length=100, blank=True, null=True)
    child6dob = models.DateField(blank=True, null=True)
    fsname = models.CharField(max_length=100, blank=True, null=True)
    ffname = models.CharField(max_length=100, blank=True, null=True)
    fmname = models.CharField(max_length=100, blank=True, null=True)
    fextname = models.CharField(max_length=100, blank=True, null=True)
    mmsname = models.CharField(max_length=100, blank=True, null=True)
    mmfname = models.CharField(max_length=100, blank=True, null=True)
    mmmname = models.CharField(max_length=100, blank=True, null=True)
    mmextname = models.CharField(max_length=100, blank=True, null=True)
    elemschoolname = models.CharField(max_length=100, blank=True, null=True)
    elemeducdegreecourse = models.CharField(max_length=100, blank=True, null=True)
    elemattendancefrom = models.CharField(max_length=100, blank=True, null=True)
    elemattendanceto = models.CharField(max_length=100, blank=True, null=True)
    elemhighestlevel = models.CharField(max_length=100, blank=True, null=True)
    elemyrgrad = models.CharField(max_length=100, blank=True, null=True)
    elemaacadreceive = models.CharField(max_length=100, blank=True, null=True)
    secschoolname = models.CharField(max_length=100, blank=True, null=True)
    seceducdegreecourse = models.CharField(max_length=100, blank=True, null=True)
    secattendancefrom = models.CharField(max_length=100, blank=True, null=True)
    secattendanceto = models.CharField(max_length=100, blank=True, null=True)
    sechighestlevel = models.CharField(max_length=100, blank=True, null=True)
    secyrgrad = models.CharField(max_length=100, blank=True, null=True)
    secaacadreceive = models.CharField(max_length=100, blank=True, null=True)
    vocschoolname = models.CharField(max_length=100, blank=True, null=True)
    voceducdegreecourse = models.CharField(max_length=100, blank=True, null=True)
    vocattendancefrom = models.CharField(max_length=100, blank=True, null=True)
    vocattendanceto = models.CharField(max_length=100, blank=True, null=True)
    vochighestlevel = models.CharField(max_length=100, blank=True, null=True)
    vocyrgrad = models.CharField(max_length=100, blank=True, null=True)
    vocaacadreceive = models.CharField(max_length=100, blank=True, null=True)
    terschoolname = models.CharField(max_length=100, blank=True, null=True)
    tereducdegreecourse = models.CharField(max_length=100, blank=True, null=True)
    terattendancefrom = models.CharField(max_length=100, blank=True, null=True)
    terattendanceto = models.CharField(max_length=100, blank=True, null=True)
    terhighestlevel = models.CharField(max_length=100, blank=True, null=True)
    teryrgrad = models.CharField(max_length=100, blank=True, null=True)
    teraacadreceive = models.CharField(max_length=100, blank=True, null=True)
    gradschoolname = models.CharField(max_length=100, blank=True, null=True)
    gradeducdegreecourse = models.CharField(max_length=100, blank=True, null=True)
    gradattendancefrom = models.CharField(max_length=100, blank=True, null=True)
    gradattendanceto = models.CharField(max_length=100, blank=True, null=True)
    gradhighestlevel = models.CharField(max_length=100, blank=True, null=True)
    gradyrgrad = models.CharField(max_length=100, blank=True, null=True)
    gradaacadreceive = models.CharField(max_length=100, blank=True, null=True)
    def __str__(self):
        return self.sname