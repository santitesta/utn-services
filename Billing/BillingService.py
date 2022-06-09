import Call
import CallTypes
import TariffService
import CallTypeService

class BillingService:
  def CalculateBill(callHistory):
    totalAmount = 0

    for call in callHistory:
      amount = TariffService.calculate(call.getTariffType(), call.getMinutes());
      totalAmount += CallTypeService.calculate(call.getCallType(), amount);
    return totalAmount;
