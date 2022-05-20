from django.contrib import admin
from .models import (CompanyInformation
,YourBusinessRecommendation
,YourCurrentTradelines
,VudokeBusinessIntelligenceScore
,BusinessReports
,UpdateYourCompanyInformation
,Dispute,VukodeScore)
# Register your models here.

admin.site.register(CompanyInformation)
admin.site.register(YourBusinessRecommendation)
admin.site.register(YourCurrentTradelines)
admin.site.register(VudokeBusinessIntelligenceScore)
admin.site.register(BusinessReports)
admin.site.register(UpdateYourCompanyInformation)
admin.site.register(Dispute)
admin.site.register(VukodeScore)