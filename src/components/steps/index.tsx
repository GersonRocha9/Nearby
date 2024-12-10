import { View, Text } from 'react-native'
import { styles } from './styles'
import { Step } from '../step'
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native'

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais próximos a você"
      />

      <Step
        icon={IconQrcode}
        title="Ative o cupom com QRCode"
        description="Veja locais perto de você que são parceiros Nearby"
      />

      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimentos"
      />
    </View>
  )
}
