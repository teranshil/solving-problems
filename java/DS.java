public class DS {
    public static void main(String[] args) {
        String stringOfNumbers = "16853940825710519741084312956327";
        String stringForRecognition = "2314";
        int index = stringOfNumbers.indexOf(stringForRecognition);

        System.out.printf("Стринг за автоматът: %s\n", stringOfNumbers);

        for (int i = 0; i < 4; i++) {
            System.out.printf("Индекс на %c в общия стринг - %d\n",
                    stringForRecognition.charAt(i), index++);
        }
    }
}
