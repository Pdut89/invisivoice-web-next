export const handlePromptResponse = (notification) => {
  const VALID_DISMISSED_REASONS = ['credential_returned']

  const isDisplayed = notification.isDisplayed()
  if (
    isDisplayed ||
    VALID_DISMISSED_REASONS.includes(notification.getDismissedReason())
  ) {
    return
  }

  const isNotDisplayed = notification.isNotDisplayed()

  const WARNING_TYPE_MAP = {
    skipped: notification.getSkippedReason,
    dismissed: notification.getDismissedReason,
  }

  if (isNotDisplayed) {
    const moment = notification.getMomentType()
    const warningType = WARNING_TYPE_MAP[moment]

    console.warn(
      'One tap not displaying reason: ',
      notification.getNotDisplayedReason()
    )
    console.warn('One tap Moment: ', moment)
    if (warningType) console.warn('Warning type: ', warningType())
  }
}
