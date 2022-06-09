import CallTypes

class CallTypeService:
  def calculate(callType, amount):
    if(callType == CallTypes.national):
      return amount
    elif(callType == CallTypes.international):
      return amount * 2