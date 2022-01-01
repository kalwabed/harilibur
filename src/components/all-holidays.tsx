import { toDateDay, toDateNumber, toMonth } from 'src/utils/date-formatter'
import { APIResult } from 'src/utils/fetcher'
import { styled } from 'stitches.config'
import {
  Card,
  CardBody,
  CardSider,
  DateDay,
  DateNumber,
  GridWrapper,
  Month,
  MonthWrapper,
  SectionHeader
} from './shared/Card'

const NotAvailable = styled('p', {
  fontSize: 'small',
  color: '$gray11'
})

const AllHolidays = ({ holidays }: { holidays: APIResult[] }) => {
  const filteredHolidays = holidays.filter(holiday => holiday.is_national_holiday)

  const holidayResult: { [month: string]: APIResult[] } = {}

  filteredHolidays.forEach(holiday => {
    const month = toMonth(holiday.holiday_date)

    // @ts-ignore
    holidayResult[month] ? holidayResult[month].push(holiday) : (holidayResult[month] = [holiday])
  })

  return (
    <GridWrapper css={{ margin: '2rem auto' }}>
      <SectionHeader>{new Date().getFullYear() + 1}</SectionHeader>
      {Object.keys(holidayResult).length === 0 && <NotAvailable>Data hari libur belum tersedia.</NotAvailable>}

      {Object.keys(holidayResult)?.map((month, index) => {
        return (
          <MonthWrapper key={month}>
            <Month>{month}</Month>
            {(Object.values(holidayResult)[index] as APIResult[])?.map(hdr => (
              <Card css={{ marginBottom: '.5rem' }} key={hdr.holiday_date}>
                <CardSider>
                  <DateDay>{toDateDay(hdr.holiday_date)}</DateDay>
                  <DateNumber>{toDateNumber(hdr.holiday_date)}</DateNumber>
                </CardSider>
                <CardBody>{hdr.holiday_name}</CardBody>
              </Card>
            ))}
          </MonthWrapper>
        )
      })}
    </GridWrapper>
  )
}

export default AllHolidays
