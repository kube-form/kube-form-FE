import encrypt from '@aws-crypto/kms-keyring';
import { getClient, KmsKeyringBrowser } from '@aws-crypto/client-browser';
import { KMSClient, CancelKeyDeletionCommand } from '@aws-sdk/client-kms';

const client = new KMSClient({ region: 'REGION' });

const credentials = {
    accessKeyId: string,
    secretAccessKey: string,
    sessionToken: string,
};

const clientProvider = getClient(KMS, {
    credentials: {
        accessKeyId,
        secretAccessKey,
        sessionToken,
    },
});

const generatorKeyId =
    'arn:aws:kms:ap-northeast-2:170777615631:alias/EncryptDecrypt';
const keyIds = [
    'arn:aws:kms:ap-northeast-2:170777615631:key/01b838ea-f709-4809-b7f5-eb0edee059bf',
];

const keyring = new KmsKeyringBrowser({
    clientProvider,
    generatorKeyId,
    keyIds,
});

// 추가사항이되 선택사항? 근데 권장은한데;
const context = {
    stage: 'demo',
    purpose: 'simple demonstration app',
    origin: 'us-west-2',
};

const plaintext = 'plaintext';

// 암호화
export default async function encryptData() {
    const result = await encrypt(keyring, plaintext, {
        encryptionContext: context,
    });
    return { result };
}
