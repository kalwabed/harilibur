import { styled } from 'stitches.config'

export const GridWrapper = styled('section', {
  display: 'grid',
  gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
  maxWidth: '32rem', // screen lg
  margin: '0 auto',
  width: '100%',
  gap: '.5rem'
})

export const Card = styled('div', {
  width: '100%',
  display: 'flex',
  backgroundColor: '$gray6',
  borderRadius: '4px',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
})

export const CardBody = styled('div', {
  padding: '.5rem',
  display: 'flex',
  alignItems: 'center',
  fontSize: 'large'
})

export const DateDay = styled('p', {
  fontSize: 'small'
})

export const DateNumber = styled('div', {
  fontSize: 'xx-large',
  fontWeight: 'bold'
})

export const CardSider = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '.3rem',
  width: '15%',
  backgroundColor: '$gray2'
})

export const SectionHeader = styled('h2', {
  fontSize: 'x-large',
  margin: '1rem 0',
  fontWeight: 'bold'
})