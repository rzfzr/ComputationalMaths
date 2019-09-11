limit = 10


def bis(x3, x2, x1, c, a, b, tol):
    def f(x):
        return x3*pow(x, 3)+x2*pow(x, 2)+x1*x+c
    counter = 0
    if f(a)*f(b) < 0:
        print('tem funcao zero')
        while counter < limit:
            counter += 1
            xm = abs((a+b)/2)
            if abs(f(xm)) <= tol:
                return

            print('counter:', counter, 'xm:', xm, 'a:', a,
                  'f(a):', f(a), 'b:', b, 'f(b):', f(b))

            # print(xm, f(a), f(b))
            if f(xm) < 0 and f(a) < 0:
                a = xm
                # print('1')
            elif f(xm) < 0 and f(b) < 0:
                b = xm
                # print('2')
            elif f(xm) > 0 and f(a) > 0:
                a = xm
                # print('3')
            elif f(xm) > 0 and f(b) > 0:
                b = xm
                # print('4')


bis(1, -7.5, 12, 3, 4.5, 6, 0.05)
