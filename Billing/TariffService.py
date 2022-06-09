import CallTypes
import Tariff
import TariffTypes

# import java.util.HashMap;
# import java.util.function.Function;


class TariffService:

  # private static final HashMap < TariffTypes, Function < Integer, Double >> CALCULATIONS = new HashMap <> () {
  #     {
  #         put(TariffTypes.REGULAR, minutes -> CalculateRegularTariff(minutes))
  #         put(TariffTypes.LATE_NIGHT, minutes -> CalculateLateNightTariff(minutes))
  #         put(TariffTypes.WEEKEND, minutes -> CalculateWeekendTariff(minutes))
  #     }
  # }

  # def calculate(tariffType, minutes: int):
  #   return CALCULATIONS
  #   .get(tariffType)
  #   .apply(minutes)

  def CalculateRegularTariff(minutes: int):
    return minutes * Tariff.REGULAR_TARIFF

  def CalculateLateNightTariff(minutes: int):
    return minutes * Tariff.LATE_NIGHT

  def CalculateWeekendTariff(minutes: int):
    return minutes * Tariff.WEEKEND
