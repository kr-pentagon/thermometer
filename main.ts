let 온도 = 0
while (true) {
    if (온도 != input.temperature()) {
        if (input.temperature() >= 40) {
            basic.showString("ERROR")
        } else {
            basic.showNumber(input.temperature())
        }
        온도 = input.temperature()
    }
}
