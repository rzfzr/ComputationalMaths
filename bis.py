limit = 10
# Methods:
# 0 = Default
# 1 = Falsa posicao


def bis(fun, a, b, tol, method):
    def f(x):
        return eval(fun)
    counter = 0
    if f(a)*f(b) < 0:
        print('tem funcao zero')
        while counter < limit:
            counter += 1

            if method == 0:
                xm = abs((a+b)/2)
            elif method == 1:
                xm = (b*f(a)-a*f(b))/(f(a)-f(b))

            print('run:', counter, 'xm:', xm, 'a:', a,
                  'f(a):', f(a), 'b:', b, 'f(b):', f(b))

            if abs(f(xm)) <= tol:
                return

            if f(xm) < 0 and f(a) < 0:
                a = xm
            elif f(xm) < 0 and f(b) < 0:
                b = xm
            elif f(xm) > 0 and f(a) > 0:
                a = xm
            elif f(xm) > 0 and f(b) > 0:
                b = xm
    else:
        print('nao tem funcao zero')


# def fixedPoint()
bis('pow(x,3)-7.5*pow(x,2)+12*x+3', 4.5, 6, 0.05, method=0)
bis('4754.28*((1-pow((1+x),-48))/x)-50000', 0.09, 0.10, 0.1, method=1)
# bis('pow(x,3)-7.5*pow(x,2)+12*x+3',4.5,6,0.05)
