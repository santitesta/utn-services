class Call:
  def __init__(self,minutes: int, tariffType, callType):
    self.minutes = minutes
    self.tariffType = tariffType
    self.callType = callType

  def getMinutes(self):
    return self.minutes

  def getTariffType(self):
    return self.tariffType

  def getCallType(self):
    return self.callType