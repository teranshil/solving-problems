import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class cryptography {

    public static void main(String[] args) throws NoSuchAlgorithmException {
        String plaintext = "random text <-->";

        MessageDigest messageDigest = MessageDigest.getInstance("MD5");
        messageDigest.reset();
        messageDigest.update(plaintext.getBytes());
        byte[] digest = messageDigest.digest();
        BigInteger bigInt = new BigInteger(1,digest);
        StringBuilder hash = new StringBuilder(bigInt.toString(16));

        // Now we need to zero pad it if you actually want the full 32 chars.
        while(hash.length() < 32 ){
            hash.insert(0, "0");
        }

    }
}
