import { useTheme } from '../context/context'
import { useColorSchemeType } from '../interfaces'


export default function useColorScheme () 
{
   const { theme } = useTheme()

   const textColorPrimary = theme === 'light' ? 'text-primary-100' : 'text-dark-primary-100'

   const textColorSecondary = theme === 'light' ? 'text-secondary-100' : 'text-dark-secondary-100'

   const backgroundColor = theme === 'light' ? 'bg-background-color' : 'bg-dark-background-color'

   const containerColor = theme === 'light' ? 'bg-container-color' : 'bg-dark-container-color'

   const values: useColorSchemeType = {
      textColorPrimary, textColorSecondary, backgroundColor, containerColor
   }

   return values
}
