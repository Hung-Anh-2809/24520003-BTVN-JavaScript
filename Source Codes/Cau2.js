function tongSoLeTuMotDenN(n)
{
    if (n < 1)
        return 0;
    return Math.pow(Math.floor((n + 1) / 2), 2);
}