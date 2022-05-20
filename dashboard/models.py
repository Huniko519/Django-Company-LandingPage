from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class CompanyInformation(models.Model):
    """
    Company information
    """
    vukode_number = models.CharField(max_length=100)
    email = models.EmailField()
    anual_sales = models.CharField(max_length=100)
    business_form = models.CharField(max_length=100)
    telephone = models.CharField(max_length=100)
    employees = models.CharField(max_length=100)
    date_incorporated = models.DateTimeField(auto_now_add=False,auto_now=True)
    age = models.CharField(max_length=100)
    state_incorporated = models.CharField(max_length=100)
    name_of_principle = models.CharField(max_length=100)
    business_name = models.CharField(max_length=100)
    business_address = models.CharField(max_length=100)
    judgements = models.CharField(max_length=100)
    liens = models.CharField(max_length=100)
    suits = models.CharField(max_length=100)
    ucc_filings = models.CharField(max_length=100)
    special_events = models.CharField(max_length=100)
    company_events = models.CharField(max_length=100)
    profit_and_loss = models.CharField(max_length=100)
    total_number_of_enquiries = models.IntegerField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class YourBusinessRecommendation(models.Model):
    """
    Business recommendation
    """
    name = models.CharField(max_length=100,default='You Do Not Have Any Current Recommendations')
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class YourCurrentTradelines(models.Model):
    """
    Current TradeLines
    """
    business_name = models.CharField(max_length=100,default='You Do Not Have Any Current TradeLines')
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    tradeline_age = models.CharField(max_length=100)
    tradeline_date = models.DateField(auto_now=False,auto_now_add=False)
    tradeline_amount = models.IntegerField()
    status = models.CharField(choices=(('pending','pending'),('confirmed','confirmed')),max_length=100,default="pending")
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.business_name

class VudokeBusinessIntelligenceScore(models.Model):
    """
    Sendesta Score
    """
    score = models.IntegerField()
    maximum_credit_recommendation = models.IntegerField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class BusinessReports(models.Model):
    """
    Business Reports
    """
    business_name = models.CharField(max_length=100)
    report = models.CharField(max_length=100)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.business_name

class UpdateYourCompanyInformation(models.Model):
    """
    Update Your Company Information
    """
    business_address = models.CharField(max_length=100)
    anual_sales = models.CharField(max_length=100)
    telephone = models.CharField(max_length=100)
    employees = models.CharField(max_length=100)
    line_of_business = models.CharField(max_length=100)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class VukodeScore(models.Model):
    """
    Sendesta Score
    """
    score = models.IntegerField()
    maximum_credit_recommendation = models.IntegerField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Dispute(models.Model):
    """
    Dispute
    """
    business_name = models.CharField(max_length=100)
    business_email = models.EmailField()
    business_phone = models.CharField(max_length=100)
    reason_of_dispute = models.CharField(max_length=500)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.business_name