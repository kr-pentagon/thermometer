let 온도 = 0
while (true) {
    if (온도 != input.temperature()) {
        basic.showNumber(input.temperature())
        온도 = input.temperature()
    }
}
