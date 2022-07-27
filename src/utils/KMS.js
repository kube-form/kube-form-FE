import {
    KMS,
    KmsKeyringBrowser,
    getClient,
    buildClient,
    CommitmentPolicy,
} from '@aws-crypto/client-browser';

const name = document.getElementById('name');
const age = document.getElementById('age');
const userForm = document.getElementById('user-form');

const { encrypt, decrypt } = buildClient(
    CommitmentPolicy.REQUIRE_ENCRYPT_REQUIRE_DECRYPT,
);
const encryptData = async (plainText) => {
    const generatorKeyId =
        'arn:aws:kms:ap-northeast-2:170777615631:alias/EncryptDecrypt';
    const keyIds = [
        'arn:aws:kms:ap-northeast-2:170777615631:key/01b838ea-f709-4809-b7f5-eb0edee059bf',
    ];

    const clientProvider = getClient(KMS, {
        credentials: {
            accessKeyId: 'asdf',
            secretAccessKey: 'zxcv',
        },
    });

    const keyring = new KmsKeyringBrowser({
        clientProvider,
        generatorKeyId,
        keyIds,
    });

    try {
        const result = await encrypt(keyring, plainText);
        console.log('this is the encrypted data', result);
    } catch (e) {
        console.log('something wrong', e);
    }
};

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(name.value, age.value);
    encryptData(name.value);
});
